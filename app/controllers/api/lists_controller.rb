
class Api::ListsController < ApplicationController
    def create
        @list = List.new(new_list_params)

        if @list.save
            render 'api/lists/show'
        else
            render json: @list.errors.full_messages, status: 422
        end 
    end

    def destroy
        @list = List.find(params[:id])

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