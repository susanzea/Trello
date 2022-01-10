class Api::BoardsController < ApplicationController
    
    def show
        @board = Board.find(params[:id]).includes(:lists)
    end
    
    def index
        @boards = Board.all.where("boards.workspace_id = ?", params[:id])
    end
    
    def create
        @board = Board.new(new_board_params)

        if @board.save
            render 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end   
    end

    def destroy
        @board = Board.find_by(title: params[:title])

        if @board
            render 'api/boards/index'
        else
            render json: ['That board does not exist'], status: 404
        end

    end

    def new_board_params
        params.require(:board).permit(:title, :user_id)
    end

end