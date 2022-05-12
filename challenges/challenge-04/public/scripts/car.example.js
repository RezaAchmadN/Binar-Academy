class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  formatCurrency = function () {
    return this.rentPerDay
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  };

  render() {
    return `
    <div id=${this.id} class="col">
      <div class="card p-2" style="width: 21rem">
        <div class="p-3 pb-0">
          <img src=${this.image} class="card-img-top" alt="${
      this.manufacture
    }" height="160px" style="object-fit: cover;"/>
        </div>
        <div class="card-body">
          <p class="card-text mb-1">${this.model}/${this.type}</p>
          <h5 class="card-title fw-bolder">Rp ${this.formatCurrency()} / hari</h5>
          <p class="card-text mb-0">
            ${this.description}
            <p class="d-flex flex-column">
              <p class="d-flex align-items-center gap-1">
                <img src="images/fi_users.svg" alt="..." />
                ${this.capacity} orang
              </p>
              <p class="d-flex align-items-center gap-1">
                <img src="images/fi_settings.svg" alt="..." />
                ${this.transmission}
              </p>
              <p class="d-flex align-items-center gap-1">
                <img src="images/fi_calendar.svg" alt="..." />
                Tahun ${this.year}
              </p>
            </p>
          </p>
          <button type="button" class="btn btn-success btn-binar-success d-flex align-items-center justify-content-center gap-1 w-100 ">                
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>
    `;
  }
}
