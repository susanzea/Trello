class Card < ApplicationRecord
    validates :title, :user_id, :list_id, presence: true

    belongs_to :list

    has_one :board,
        through: :list

end