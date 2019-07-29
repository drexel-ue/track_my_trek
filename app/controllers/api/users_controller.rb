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
            render :errors
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
