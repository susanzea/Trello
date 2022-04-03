class Api::UsersController < ApplicationController
    
    def show
        @user = User.find(params[:id])
        render :show
    end
    
    def create
        @user = User.new(new_user_params)

        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def new_user_params
        params.require(:user).permit(:username, :email, :full_name, :password)
    end
end
