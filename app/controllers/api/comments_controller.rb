class Api::CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @comments = Comment.all.where(card_id: params[:card_id])
        render :index
    end 

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(new_comment_params)

        if @comment.save
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 422
        end 
    end

    def destroy
        @comment = Comment.find(params[:id])

        if @comment
            @comment.destroy
        else
            render json: ['That comment does not exist'], status: 404
        end
    end

    def update
        @comment = Comment.find(params[:id])
        
        if @comment.update(new_comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


    def new_comment_params
        params.require(:comment).permit(:id, :body, :user_id, :card_id)
    end
end