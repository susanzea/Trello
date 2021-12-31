class Api::UsersController < ApplicationController
    def create
        debugger
        @user = User.new(new_user_params)

        if @user.save
            login(@user)
            render :show    # same as 'api/users/show'
        else
            render json: ['Invalid Signup Credentials'], status: 422
        end
    end

    def new_user_params
        params.require(:user).permit(:username, :email, :full_name, :password)
    end
end