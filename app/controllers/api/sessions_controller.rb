class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render :create
        else
            @errors = ['Please review the form and submit again']
            render :errors, status: 400
        end
    end
    
    def destroy
        if current_user
            logout!    
            render :destroy
        else
            @errors = ['No one is logged in']
            render :errors, status: 422
        end
    end

end
