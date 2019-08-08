class Api::UsersController < ApplicationController

    def show
        if params[:friends_of]
            id = params[:friends_of]
            sql = %Q{
                select * from users
                where id in (
                    select requester_id from friend_requests
                    where requestee_id = #{id}
                ) or id in (
                    select requestee_id from friend_requests
                    where requester_id = #{id}
                )
            }
            @friends = execute_query(sql).map { |user| User.new(user) }
            sql = %Q{
                select * from friend_requests
                where requester_id = #{id} or requestee_id = #{id}
            }
            @requests = execute_query(sql).map { |user| FriendRequest.new(user) }
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
