class Api::WorkspacesController < ApplicationController

    def show
        @workspace = Workspace.find(params[:id])
        render :show
    end

    def index
        # there is a current user id here
        @workspaces = Workspace.all.where("user_id = ?", current_user.id)
    end

    def create
        @workspace = Workspace.new(new_workspace_params)

        if @workspace.save
            render 'api/workspaces/show'
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    def destroy
        @workspace = Workspace.find(params[:id])

        if @workspace.destroy
            render 'api/workspaces/show'
        else
            render json: ['Workspace not found'], status: 404
        end
    end

    def update
        @workspace = Workspace.find(params[:id])

        if @workspace.update(new_workspace_params)
            render :show
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    def new_workspace_params
        params.require(:workspace).permit(:id, :title, :user_id)
    end

end