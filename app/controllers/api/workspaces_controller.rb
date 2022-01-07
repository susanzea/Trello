class WorkspacesController < ApplicationController

    def show
        @workspace = Workspace.find(params[:id])
        render :show
    end

end