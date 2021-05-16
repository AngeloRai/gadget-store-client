function ProductForm(props) {
  return (
    <form className="mb-5" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="productFormName">Beer Name</label>
        <input
          type="text"
          className="form-control"
          id="productFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productFormTagline">Tagline</label>
        <input
          type="text"
          className="form-control"
          id="productFormTagline"
          name="tagline"
          onChange={props.handleChange}
          value={props.state.tagline}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productFormFirstBrewed">First Brewed In</label>
        <input
          type="text"
          className="form-control"
          id="productFormFirstBrewed"
          name="first_brewed"
          onChange={props.handleChange}
          value={props.state.first_brewed}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productFormDescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="productFormDescription"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productFormImage">Beer Picture</label>
        <input
          type="file"
          className="form-control"
          id="productFormImage"
          name="image_url"
          onChange={props.handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productFormAbv">Alcohol by volume (ABV%)</label>
        <input
          type="number"
          className="form-control"
          id="productFormAbv"
          name="abv"
          onChange={props.handleChange}
          value={props.state.abv}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productFormFoodPairing">Food Pairings</label>
        <input
          type="text"
          className="form-control"
          id="productFormFoodPairing"
          name="food_pairing"
          onChange={props.handleChange}
          value={props.state.food_pairing}
        />
      </div>

      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="productFormAuthor">Contributed By (Author)</label>
          <input
            type="text"
            className="form-control"
            id="productFormAuthor"
            name="contributed_by"
            onChange={props.handleChange}
            value={props.state.contributed_by}
          />
        </div>

        <div className="form-group col">
          <label htmlFor="productFormExpireDate">Expiration Date</label>
          <input
            type="date"
            className="form-control"
            id="productFormExpireDate"
            name="expire_date"
            onChange={props.handleChange}
            value={props.state.expire_date}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="productFormCost">Cost</label>
          <input
            type="number"
            className="form-control"
            id="productFormCost"
            name="cost"
            onChange={props.handleChange}
            value={props.state.cost}
          />
        </div>

        <div className="form-group col">
          <label htmlFor="productFormPrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="productFormPrice"
            name="price"
            onChange={props.handleChange}
            value={props.state.price}
          />
        </div>

        <div className="form-group col">
          <label htmlFor="productFormVolume">Volume (ml)</label>
          <input
            type="number"
            className="form-control"
            id="productFormVolume"
            name="volume"
            onChange={props.handleChange}
            value={props.state.volume}
          />
        </div>

        <div className="form-group col">
          <label htmlFor="productFormQttInStock">Quantity in Stock</label>
          <input
            type="number"
            className="form-control"
            id="productFormQttInStock"
            name="qtt_in_stock"
            onChange={props.handleChange}
            value={props.state.qtt_in_stock}
          />
        </div>
      </div>

      <hr />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
