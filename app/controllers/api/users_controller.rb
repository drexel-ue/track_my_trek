class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
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
