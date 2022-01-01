class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

     def current_user
        debugger
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        if current_user.nil?
            render json: {base: ['invalid credentials']}, status: 401 
        end
    end

    def login(user)
        debugger
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
        debugger
    end

    def logout
        current_user.reset_session_token!
        session[:session_token]
        @current_user = nil
    end

    def logged_in? 
        !!current_user
    end
end
