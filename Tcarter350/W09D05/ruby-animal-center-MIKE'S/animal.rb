class Animal

  attr_reader :name, :breed, :gender, :favorite_toys

  def initialize(name, breed, gender, favorite_toys=[])
    @name = name
    @breed = breed
    @gender = gender
    @favorite_toys = favorite_toys
  end

  def to_s
    "#{name} #{breed}"
  end

end
