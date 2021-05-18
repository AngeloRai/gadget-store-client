function ProductForm(props) {
  return (
    <form className="mb-5" onSubmit={props.handleSubmit}>
      <div className="form-row">
        <div className="form-group col mr-2">
          <label htmlFor="gadgetFormCategory">Category</label>
          <select
            type="text"
            className="form-control"
            id="gadgetFormCategory"
            name="category"
            onChange={props.handleChange}
            value={props.state.category}
          >
            <option value="iPhone">iPhone</option>
            <option value="iPad">iPad</option>
            <option value="Watch">Watch</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div className="form-group col mx-2">
          <label htmlFor="gadgetFormModel">Model</label>
          <input
            type="text"
            className="form-control"
            id="gadgetFormModel"
            name="model"
            onChange={props.handleChange}
            value={props.state.model}
          />
        </div>

        <div className="form-group col ml-2">
          <label htmlFor="gadgetFormBrand">Brand</label>
          <input
            type="text"
            className="form-control"
            id="gadgetFormBrand"
            name="brand"
            onChange={props.handleChange}
            value={props.state.brand}
          />
        </div>

        <div className="form-group col">
          <label htmlFor="gadgetFormColor">Color</label>

          <select
            type="text"
            className="form-control"
            id="gadgetFormColor"
            name="color"
            onChange={props.handleChange}
            value={props.state.color}
          >
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="grey">grey</option>
            <option value="silver">silver</option>
            <option value="gold">gold</option>
            <option value="pink">pink</option>
            <option value="red">red</option>
            <option value="purple">purple</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="gadgetFormDescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="gadgetFormDescription"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>

      <div className="form-row">
        <div className="form-group col mr-2">
          <label htmlFor="gadgetFormCost">Cost</label>
          <input
            min={0}
            type="number"
            className="form-control"
            id="gadgetFormCost"
            name="cost"
            onChange={props.handleChange}
            value={props.state.cost}
          />
        </div>

        <div className="form-group col mx-2">
          <label htmlFor="gadgetFormPrice">Price</label>
          <input
            min={0}
            type="number"
            className="form-control"
            id="gadgetFormPrice"
            name="price"
            onChange={props.handleChange}
            value={props.state.price}
          />
        </div>

        <div className="form-group col ml-2">
          <label htmlFor="gadgetFormDiscount">Discount</label>
          <input
            min={0}
            type="number"
            className="form-control"
            id="gadgetFormDiscount"
            name="discount"
            onChange={props.handleChange}
            value={props.state.discount}
          />
        </div>
      </div>

      <div className="form-row"></div>

      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="gadgetFormCondition">Condition</label>
          <select
             type="text"
            className="form-control"
            id="gadgetFormCondition"
            name="condition"
            onChange={props.handleChange}
            value={props.state.condition}
          >
            <option value="NEW">NEW</option>
            <option value="USED">USED</option>
          </select>
        </div>

        <div className="form-group col">
          <label htmlFor="gadgetFormQttInStock">Quantity in Stock</label>
          <input
            min={0}
            type="number"
            className="form-control"
            id="gadgetFormQttInStock"
            name="qtt_in_stock"
            onChange={props.handleChange}
            value={props.state.qtt_in_stock}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="gadgetFormImage">Gadget Picture</label>
        <input
          multiple
          type="file"
          className="form-control"
          id="gadgetFormImage"
          name="image_url"
          onChange={props.handleChange}
        />
      </div>
      <hr />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
