class Api::TreksController < ApplicationController
    def create
        data = trek_params
        data[:user_id] = current_user.id
        @trek = Trek.new(data)
        if @trek.save
            render :create
        else
            @errors = @trek.errors.full_messages
            render :errors, status: 400
        end

        waypoints = params[:waypoints].values
        waypoints.each do |point|
            point[:trek_id] = @trek.id
        end

        Waypoint.create(waypoints)
    end

    def show
        @trek = Trek.find(params[:id])
        @waypoints = Waypoint.where(['trek_id = :id', {id: @trek.id}])
    end

    private

    def trek_params
        params.require(:trek).permit(:activity, :map_name, :user_id)
    end

    def waypoint_params
        params.require(:waypoints).permit(:lat, :lng, :trek_id)
    end

end
