class List < ApplicationRecord 
    validates :title, :board_id, presence: true

    belongs_to :board

    has_one :user,
        through: board

    has_one :workspace,
        through: :board

    has_many :cards
end