using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodWeb.API.Database.Entities;
using FoodWeb.API.DTOs;

namespace FoodWeb.API.Database.IRepositories
{
    public interface IOrderDetailRepository
    {
        public OrderDetail CreateOrderDetail(int IdUser, string CodeOrderDetail);

        public IEnumerable<OrderDTO> GetAllOrderDetailByIdUserPaging(int IdUser, int numberPage);
        
        public bool CheckExistListOrderWithIdUser(int IdUser, int IdOrderDetail);

        public int GetTotalPageOrderDetailByIdUserPaging(int IdUser);

        public int GetTotalPageOrderDetailByChoiceShip();

        public IEnumerable<OrderDTO> GetAllOrderDetailByChoiceShipPaging(int numberPage);
    }
}