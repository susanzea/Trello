class Api::WorkspacesController < ApplicationController

    def show
        @workspace = Workspace.find(params[:id]).includes(:boards)
        render :show
    end

    def index
        debugger
        @workspaces = Workspace.all

    end

    def create
        @workspace = Workspace.create!(workspace_params)
        render :show
    end

    def new_workspace_params
        params.require(:workspace).permit(:title)
    end

end