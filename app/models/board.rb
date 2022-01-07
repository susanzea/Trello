class Board < ApplicationRecord
    validates :title, :creator_id, presence: true
    validates :title, uniqueness: true

    belongs_to :workspace
    
    belongs_to :user
        through :workspace

    has_many :lists

    has_many :cards
        through :lists





end