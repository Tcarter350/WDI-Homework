class Client

  attr_reader :first_name, :last_name, :pets

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
    @pets = []
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def add_pet(pet)
    @pets << pet
  end

  def remove_pet_by_index(index)
    @pets.delete_at index
  end

  def to_s
    full_name
  end
end
