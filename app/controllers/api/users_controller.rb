class Api::UsersController < ApplicationController

    def show
        if params[:friends]
            id = params[:friends]
            sql = %Q{
                select * from users
                where id in (
                    select requester_id from friend_requests
                    where accepted = true and requestee_id = #{id}
                ) or id in (
                    select requestee_id from friend_requests
                    where accepted = true and requester_id = #{id}
                )
            }
            @friends = execute_query(sql)
            render :show_friends
        elsif params[:query_string]
            @perspective_friends = User.find_perspective_friends(params[:query_string])
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
