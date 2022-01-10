class Api::WorkspacesController < ApplicationController

    def show
        @workspace = Workspace.find(params[:id]).includes(:boards)
        render :show
    end

    def index
        @workspaces = Workspace.all

    end

    def create
        @workspace = Workspace.create!(new_workspace_params)

        render 'api/workspaces/index'
    end

    def destroy
        @workspace = Workspace.find(params[:id])

        if @workspace.destroy
            render 'api/workspaces/show'
        else
            render json: ['Workspace not found'], status: 404
        end
    end

    def new_workspace_params
        params.require(:workspace).permit(:title, :user_id)
    end

end