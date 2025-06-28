import {
  Controller,
  Get,
  UseBefore,
  QueryParams,
  CurrentUser
} from "routing-controllers";
import { AuthMiddleware } from "../../middleware/AuthMiddleware";
import { OrderService, OrderFilters, PaginatedOrdersResponse } from "../../service/OrderService";

@Controller("/api/v1/orders")
// @UseBefore(AuthMiddleware)
export class OrdersController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  /**
   * Get all orders with pagination
   * GET /api/v1/orders
   */
  @Get("/")
  async getOrders(
      @QueryParams() filters: OrderFilters
  ): Promise<PaginatedOrdersResponse> {
    return this.orderService.getUserOrders(1, filters);
  }

}