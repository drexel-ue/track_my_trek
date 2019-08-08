class Api::UsersController < ApplicationController

    def show
        if params[:friends_of]
            id = params[:friends_of]

            requests = current_user.sent_requests + current_user.received_requests
            ids = (requests.pluck(:requester_id) + requests.pluck(:requestee_id)).uniq

            @friends = User.where('id in (?) and id <> ?', ids, current_user.id)

            @accepted = requests.select { |request| request[:accepted] }
            @pending = requests.select { |request| !request[:accepted] }
            render :show_friends
        elsif params[:query_string]
            query_string = params[:query_string]
            sql = %Q{
                select * from users
                where lower(first_name) like lower('%#{query_string}%') or lower(last_name) like lower('%#{query_string}%') or lower(username) like lower('%#{query_string}%')
            }
            @friends = []
            execute_query(sql).each { |user| @friends << User.new(user) if user['id'] != current_user.id }
            render :show_friends
        else
            @user = User.find(params[:id])
            render :show
        end
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            @errors = @user.errors.full_messages
            render :errors, status: 402
        end
    end

    private

    def user_params
        params.require(:user).permit(
            :username, :password, :first_name, :last_name,
            :birth_date, :gender, :country, :subscribed
        )
    end
end
