@boards.each do |board|
    board.set! board.id do 
        board.extract! board, :id, :title, :workspace_id
    end
end