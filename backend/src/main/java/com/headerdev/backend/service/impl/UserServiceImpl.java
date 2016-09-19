package com.headerdev.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.headerdev.backend.dao.UserDao;
import com.headerdev.backend.model.User;
import com.headerdev.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public User save(User user) {
		return userDao.save(user);
	}

	@Override
	public User findByUserName(String userName) {		
		return userDao.findByUserName(userName);
	}
	
}
