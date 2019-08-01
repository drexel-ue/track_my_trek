class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        # debugger
        if @user
            login(@user)
            render :create
        else
            # debugger;
            @errors = ['Please check username or credentials fool']
            render :errors, status: 400
        end
    end
    
    def destroy
        if current_user
            logout!    
            render :destroy
        else
            @errors = ["Ain't nobody logged in"]
            render :errors, status: 422
        end
    end

end
