class Api::BoardsController < ApplicationController
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

        if @user
            # return to BoardIndex
        else
            render json: ['That board does not exist'], status: 404
        end

    end

    def new_board_params
        params.require(:board).permit(:title, :creator_id, :collaborator_id)
    end

end