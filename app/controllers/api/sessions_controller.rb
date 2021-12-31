class Api::SessionsController < ApplicationController

    def create 
        debugger
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            login(@user)
            render 'api/users/show'
        else
            render json: ['No user matches the input credentials'], status: 401
        end
    end

    def destroy
        debugger
        @user = current_user

        if @user
            logout
            render 'api/users/show'
        else
            render json: ['No one is signed in'], status: 404
        end
    end

end