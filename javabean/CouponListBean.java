package exercise.yachi;

import java.io.Serializable;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Coupon_List")
public class CouponListBean implements Serializable{
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer coupon_list_id;
	
	
	@OneToOne(mappedBy = "couponListBean")
	private ShopBean shopBean;
	
	private String coupon_memo;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "couponListBean")
	private Set<CouponBean> coupons = new LinkedHashSet<CouponBean>();

	public Integer getCoupon_list_id() {
		return coupon_list_id;
	}

	public void setCoupon_list_id(Integer coupon_list_id) {
		this.coupon_list_id = coupon_list_id;
	}

	public ShopBean getShopBean() {
		return shopBean;
	}

	public void setShopBean(ShopBean shopBean) {
		this.shopBean = shopBean;
	}

	public String getCoupon_memo() {
		return coupon_memo;
	}

	public void setCoupon_memo(String coupon_memo) {
		this.coupon_memo = coupon_memo;
	}

	public Set<CouponBean> getCoupons() {
		return coupons;
	}

	public void setCoupons(Set<CouponBean> coupons) {
		this.coupons = coupons;
	}

	
	

}
