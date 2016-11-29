class Shelter
  attr_reader :name, :capacity
  attr_accessor :animals, :clients

  def initialize (name, capacity)
    @name = name
    @capacity = capacity
    @animals = []
    @clients = []
  end

  def add_animal(animal)
    if @animals.size < @capacity
      @animals << animal
    end
  end

  def add_client(client)
    @clients << client
  end

  def remove_animal_by_index(index)
    @animals.delete_at(index)
  end
end
