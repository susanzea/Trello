class Board < ApplicationRecord
    validates :title, :workspace_id, presence: true
    validates :title, uniqueness: true

    belongs_to :workspace
    
    has_one :user,
        through: :workspace

    has_many :lists

    has_many :cards,
        through: :lists

end