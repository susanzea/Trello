class Workspace < ApplicationRecord
    validates :title, :user_id, presence: true
    validates :title, uniqueness: true

    belongs_to :user
    has_many :boards

end