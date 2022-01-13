json.board do
    json.set! @board.id do
        json.extract! @board, :id, :title, :workspace_id
    end
end

json.lists do
    @board.lists.each do |list|
        json.set! list.id do
            json.extract! list, :id, :title, :board_id
        end
    end
end

json.cards do
    @board.cards.each do |card|
        json.set! card.id do
            json.extract! card, :id, :title, :list_id
        end
    end
end