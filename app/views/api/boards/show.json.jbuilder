json.extract! @board, :id, :title, :workspace_id

json.lists do
    json.array! @lists, :id, :title, :board_id
end