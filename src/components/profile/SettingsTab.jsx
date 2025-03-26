import React, { useState } from 'react';

const SettingsTab = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567'
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({ ...personalInfo });
  const [isSaving, setIsSaving] = useState(false);
  
  const [notificationSettings, setNotificationSettings] = useState({
    orderUpdates: true,
    promotions: false,
    newArrivals: true,
    blogPosts: false
  });
  
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPersonalInfo(editValues);
      setIsEditing(false);
      console.log('Personal info saved:', editValues);
    } catch (error) {
      console.error('Error saving personal info:', error);
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleNotificationToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          {!isEditing ? (
            <button 
              onClick={() => {
                setEditValues({ ...personalInfo });
                setIsEditing(true);
              }}
              className="btn-outline cursor-pointer"
            >
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={() => setIsEditing(false)}
                className="btn-secondary cursor-pointer"
                disabled={isSaving}
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="btn-primary cursor-pointer flex items-center"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editValues.name}
                  onChange={handleEditChange}
                  className="input-field"
                />
              ) : (
                <p className="text-gray-900">{personalInfo.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editValues.email}
                  onChange={handleEditChange}
                  className="input-field"
                />
              ) : (
                <p className="text-gray-900">{personalInfo.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={editValues.phone}
                  onChange={handleEditChange}
                  className="input-field"
                />
              ) : (
                <p className="text-gray-900">{personalInfo.phone}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Settings */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Order Updates</h3>
                <p className="text-sm text-gray-500">Receive notifications about your order status</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={notificationSettings.orderUpdates}
                  onChange={() => handleNotificationToggle('orderUpdates')}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Promotions</h3>
                <p className="text-sm text-gray-500">Receive special offers and discounts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={notificationSettings.promotions}
                  onChange={() => handleNotificationToggle('promotions')}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">New Arrivals</h3>
                <p className="text-sm text-gray-500">Be the first to know about new products</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={notificationSettings.newArrivals}
                  onChange={() => handleNotificationToggle('newArrivals')}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Blog Posts</h3>
                <p className="text-sm text-gray-500">Receive updates about fashion tips and styling advice</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={notificationSettings.blogPosts}
                  onChange={() => handleNotificationToggle('blogPosts')}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Security Settings */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Security</h2>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Change Password</h3>
              <button className="btn-outline cursor-pointer">
                Update Password
              </button>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500 mb-3">Add an extra layer of security to your account</p>
              <button className="btn-outline cursor-pointer">
                Enable Two-Factor Authentication
              </button>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Delete Account</h3>
              <p className="text-sm text-gray-500 mb-3">Permanently delete your account and all associated data</p>
              <button className="bg-red-100 text-red-700 font-medium py-2 px-4 rounded-lg hover:bg-red-200 transition-colors cursor-pointer">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;