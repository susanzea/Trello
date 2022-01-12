
class Api::ListsController < ApplicationController
    def create
        @list = Board.new(new_board_params)

        if !@list.save
            render json: @list.errors.full_messages, status: 422
        end 
    end

    def destroy
        @list = Board.find_by(title: params[:title])

        if @list
            @list.destroy
        else
            render json: ['That list does not exist'], status: 404
        end
    end

    def new_list_params
        params.require(:list).permit(:title, :board_id)
    end
end