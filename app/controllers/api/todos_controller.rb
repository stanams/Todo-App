class Api::TodosController < ApplicationController


  def index
    @todos = Todo.all
    render json: @todos
  end

  def show
    id = params[:id]
    @todo = Todo.find(id)
    render json: @todo
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo
  end

  def destroy
    id = params[:id]
    @todo = Todo.find(id)
    @todo.destroy!
    render json: @todo
  end

  def update
    id = params[:id]
    @todo = Todo.find(id)
    @todo.update!(todo_params)
    render json: @todo
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
