function Checkout() {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="FirstName LastName"></input>
        <input type="tel" name="mobile" placeholder="000-000-0000"></input>
        <input type="text" name="address" placeholder="Address"></input>
        <input type="text" name="card number" placeholder="Card number"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;
