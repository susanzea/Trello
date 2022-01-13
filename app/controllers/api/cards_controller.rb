
class Api::CardsController < ApplicationController
    
    def index
        @cards = Card.all.where(list_id: params[:list_id])
        render :index
    end 

    def show
        @card = Card.find(params[:id])
        render :show
    end

    def create
        @card = Card.new(new_card_params)

        if @card.save
            render 'api/cards/show'
        else
            render json: @card.errors.full_messages, status: 422
        end 
    end

    def destroy
        @card = Card.find(params[:id])

        if @card
            @card.destroy
        else
            render json: ['That card does not exist'], status: 404
        end
    end

    def new_card_params
        params.require(:card).permit(:title, :description, :user_id, :list_id, :due_date)
    end
end