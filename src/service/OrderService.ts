import { Repository } from "typeorm";
import { OrderDetailEntity } from "../entities/OrderDetailEntity";
import AppDataSource from "../config/Database";

export interface OrderFilters {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    orderRefNo?: string;
    transactionType?: string;
    orderStatus?: string;
}

export interface OrderListItem {
    id: string;
    symbol: string;
    type: string;
    shares: number;
    price: number;
    status: string;
    date: Date;
    total: number;
}

export interface PaginatedOrdersResponse {
    data: OrderListItem[];
    totalItems: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
}

export class OrderService {
    private orderRepository: Repository<OrderDetailEntity>;

    constructor() {
        this.orderRepository = AppDataSource.getRepository(OrderDetailEntity);
    }

    /**
     * Get paginated orders for a user
     */
    async getUserOrders(
        userId: number,
        filters: OrderFilters
    ): Promise<PaginatedOrdersResponse> {
        const {
            page = 1,
            pageSize = 10,
            sortBy = "created_on",
            sortOrder = "desc",
        } = filters;
        const skip = (page - 1) * pageSize;

        const queryBuilder = this.buildOrderQuery(userId, filters)
            .orderBy(`order.${sortBy}`, sortOrder.toUpperCase() as "ASC" | "DESC")
            .skip(skip)
            .take(pageSize);

        const [orders, totalItems] = await queryBuilder.getManyAndCount();
        const data = this.transformOrdersToListItems(orders);

        return {
            data,
            totalItems,
            currentPage: page,
            totalPages: Math.ceil(totalItems / pageSize),
            pageSize,
        };
    }

    /**
     * Build the order query with filters
     */
    private buildOrderQuery(
        userId: number,
        filters: OrderFilters
    ) {
        const qb = this.orderRepository
            .createQueryBuilder("order")
            .where("order.created_by = :userId", { userId });

        if (filters.orderRefNo) {
            qb.andWhere("order.order_ref_no LIKE :orderRefNo", {
                orderRefNo: `%${filters.orderRefNo}%`,
            });
        }

        if (filters.transactionType) {
            qb.andWhere("order.transaction_type = :type", {
                type: filters.transactionType,
            });
        }

        if (filters.orderStatus) {
            qb.andWhere("order.order_status = :status", {
                status: filters.orderStatus,
            });
        }

        return qb;
    }

    /**
     * Transform order entities to list items
     */
    private transformOrdersToListItems(
        orders: OrderDetailEntity[]
    ): OrderListItem[] {
        return orders.map((order) => ({
            id: order.order_ref_no,
            symbol: order.security_name,
            type: order.transaction_type,
            shares: order.quantity,
            price: Number(order.security_value),
            status: order.order_status,
            date: order.created_on,
            total: Number(order.order_value),
        }));
    }
}
