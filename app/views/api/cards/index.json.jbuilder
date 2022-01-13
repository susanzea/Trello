
@cards.each do  card|
    json.set! card.id do 
        json.extract! card, :id, :title, :list_id, :user_id, :description, :due_date
    end
end