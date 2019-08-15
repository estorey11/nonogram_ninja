class NonogramsController < ApplicationController

  def create
    @nonogram=Nonogram.create(nonogram_params)
    render json: @nonogram, status: 201
  end

  def show
    @nonogram=Nonogram.find_by(id: params[:id])
    render json: @nonogram
  end


  private

  def nonogram_params
    params.require(:nonogram).permit(:solution, :user_id, :length, :width)
  end


end
