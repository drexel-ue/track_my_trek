class Api::TreksController < ApplicationController
    def create
        data = params[:trek]
        data[:user_id] = current_user.id
        debugger
        @trek = Trek.new(data)
        debugger
        if @trek.save
            render :create
        else
            @errors = @trek.errors.full_messages
        end

        waypoints = params[:waypoints].values
        waypoints.each do |point|
            point[:trek_id] = @trek.id
        end

        debugger

        Waypoint.create(waypoints)
    end

end
