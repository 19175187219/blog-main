package com.mh.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @Author dmh
 * @Date 2023/7/28 21:32
 * @Version 1.0
 * @introduce
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminRoleVo {
    private List<RoleVo> rows;
    private Long total;
}
