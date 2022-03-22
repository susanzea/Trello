class Comment < ApplicationRecord
    validates :body, :user_id, :card_id, presence: true

    belongs_to :user

    belongs_to :card
end
