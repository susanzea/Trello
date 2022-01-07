class Workspace < ApplicationRecord

    belongs_to :user
    has_many :boards

end