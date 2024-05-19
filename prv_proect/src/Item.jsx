import React from 'react';

const Item = ({ img, name, isPacked }) => {
  return (
    <div className='card--component'>
      <img className='item' src={img} alt="slika" />
      <h2>{name}</h2>
      <h3>
        {isPacked ? (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEX///8AAADi4uKzs7Pt7e3U1NSMjIxhYWE1NTWhoaHExMT6+vr29vZ3d3ccHBycnJzc3NxcXFxFRUVMTEyUlJT2N8dhAAADP0lEQVR4nO3dy3LaQBSEYcTNKE5i5/L+z5rCDqYBaTQXVKd7qr+tMXV6M//CC282ZmZmZmZmZsbuNfqA1f36/T36hHXthmH4Fn3EmvbD2Y/oM1Z0+lg4/NxGH7KW43AxRp+yjsNw9afLB2e40eGD83K7sL8HZzfc6+zB2T8M7O3BOU0t7OnBOU4O7OjBOcwN7ObBmR/YyYNzH4o70ee1ewzFjUP0fc0mQ3F1jL6v3XQoLk7R57WbDcWnffR9zRKhONtF39cuPfAl+rx2DoU6h0KeQyEvPdCh4OdQyHMo1DkU8hwKdQ6FPIdCXnqgQ8HPoZDnUKhzKOQ5FOocCnkOhbz0QIeCn0Mhz6FQ51DIcyjUORTyHAp56YEOBT+HQp5Doc6hkOdQqHMo5DkU8tIDHQp+DoU8h0KdQyHPoVDnUMhzKOSlBzoU/BwKeQ6FOodCnkOhzqGQ51DISw90KPg5FPIcCnUOhTyHQp1DEertvf07qEMxDkPz/1OgDsV4PqF1YnpgbCjGzyPaJjKHYrxc0TKRORTj9Y76icyhGPGS6onEoRhvb6mcSByK8f6YqonEoXgYWDcxPTAyFBMDaybyhmJyYPlE3lDMDCydyBuK2YGFE2lDkRhYNJE2FMmBBRNpQ7EwMH9i+lviQvG2NDB3Im0o3pcXZk3kDcVm+5SJvKHYPGkibSg+PGEibSj+a55IG4ovrRPTv0nxN4q2ibShQC0TiUOB6idShwJVT+QOBaqcyB4KVDWRPxSoZmL60xShQOUTJUKBSieKhAKVTZQJBSqaqBMKVDBRKRQoe6JWKFDuxPQn6EKB8ibKhQLlTPyb/jFjKFDOxCTOUKDGiayhQG0TaUOBWiYShwLVT6QOBaqeGH14vsqJ7KFAVRP5Q4EqJiqEApVPlAgFKp0oEgpUNlEmFKhoYvSxdQomKoUCZU/UCgXKnKgWCpQ3US4UKGeiYCjQ8kTJUKDFidEHtluYqBoKlJyoGwqUmKgcCjQ/UToUaG6ieCjQ9ET5UKDJidFHPdfExB5CgR4m9hEKdDexl1Cg24ndhALhxI5Cga4TuwoF+poYfch6tn2GAm37DAXa9hkKtO0zFOg1+gAzsxj/AEUAJENGAs2XAAAAAElFTkSuQmCC"
            alt="packed"
          />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BRhWyo6I1Rz3Qr3OtAX6kPpqTrHQwAM_tA&s"
            alt="not packed"
          />
        )}
      </h3>
    </div>
  );
}

export default Item;
