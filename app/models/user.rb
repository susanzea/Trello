class User < ApplicationRecord
    #FIGVAPER
    # add model validation! this will largely reflect constraints set in db
    # V
    validates :username, :email, :full_name, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    # A
    attr_reader :password 
    after_initialize :ensure_session_token

    has_many :workspaces

    has_many :boards
        through :workspaces

    # F
    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil unless @user
        return @user if @user.is_password?(password)
    end

    # I
    def is_password?(password)
        password_obj = BCrypt::Password.new(self.password_digest)
        password_obj.is_password?(password)
    end

    # G
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    # E
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    # R
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end