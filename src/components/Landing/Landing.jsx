import Appbar from "../Dashboard-user/Appbar/Appbar";
import OrdersCard from "../Dashboard-user/DashboardCard/OrdersCard";
import Sidebar from "../Dashboard-user/Sidebar/Sidebar";
import NavbarLayer from "./Navbar/Navbar";

export default function Landing() {
    return (
        <div>
              {/* <NavbarLayer /> */}
              {/* <OrdersCard/> */}
             
            <OrdersCard/>
              <button onClick={() => {
                fetch("http://localhost:5000/api/user/logout", {
                  method: "GET",
                  credentials: "include",
                  mode: "cors",
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then((res) => {
                  if (res.status === 200) {
                    localStorage.setItem("user", null);
                    window.location.href = "/";
                  }
                });
              }}>LOGOUT</button>

        </div>
    )
}