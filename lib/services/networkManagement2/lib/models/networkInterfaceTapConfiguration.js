/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Tap configuration in a Network Interface
 *
 * @extends models['SubResource']
 */
class NetworkInterfaceTapConfiguration extends models['SubResource'] {
  /**
   * Create a NetworkInterfaceTapConfiguration.
   * @member {object} [virtualNetworkTap] The reference of the Virtual Network
   * Tap resource.
   * @member {array} [virtualNetworkTap.networkInterfaceTapConfigurations]
   * Specifies the list of resource IDs for the network interface IP
   * configuration that needs to be tapped.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration] The
   * reference to the private IP Address of the collector nic that will receive
   * the tap
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.virtualNetworkTaps]
   * The reference to Virtual Network Taps.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.applicationGatewayBackendAddressPools]
   * The reference of ApplicationGatewayBackendAddressPool resource.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.loadBalancerBackendAddressPools]
   * The reference of LoadBalancerBackendAddressPool resource.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.loadBalancerInboundNatRules]
   * A list of references of LoadBalancerInboundNatRules.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.privateIPAddress]
   * Private IP address of the IP configuration.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.privateIPAllocationMethod]
   * Defines how a private IP address is assigned. Possible values are:
   * 'Static' and 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.privateIPAddressVersion]
   * Available from Api-Version 2016-03-30 onwards, it represents whether the
   * specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
   * Possible values are: 'IPv4' and 'IPv6'. Possible values include: 'IPv4',
   * 'IPv6'
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet]
   * Subnet bound to the IP configuration.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.addressPrefix]
   * The address prefix for the subnet.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.addressPrefixes]
   * List of  address prefixes for the subnet.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.routeTable]
   * The reference of the RouteTable resource.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.routeTable.subnets]
   * A collection of references to subnets.
   * @member {boolean}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.routeTable.etag]
   * Gets a unique read-only string that changes whenever the resource is
   * updated.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.serviceEndpoints]
   * An array of service endpoints.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.interfaceEndpoints]
   * An array of references to interface endpoints
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.ipConfigurations]
   * Gets an array of references to the network interface IP configurations
   * using subnet.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.provisioningState]
   * The provisioning state of the resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.subnet.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {boolean}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.primary]
   * Gets whether this is a primary customer address on the network interface.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress]
   * Public IP address bound to the IP configuration.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.sku]
   * The public IP address SKU.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.sku.name]
   * Name of a public IP address SKU. Possible values include: 'Basic',
   * 'Standard'
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPAllocationMethod]
   * The public IP allocation method. Possible values are: 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPAddressVersion]
   * The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
   * Possible values include: 'IPv4', 'IPv6'
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration]
   * The IP configuration associated with the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.privateIPAddress]
   * The private IP address of the IP configuration.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.privateIPAllocationMethod]
   * The private IP allocation method. Possible values are 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet]
   * The reference of the subnet resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefix]
   * The address prefix for the subnet.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefixes]
   * List of  address prefixes for the subnet.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable]
   * The reference of the RouteTable resource.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.subnets]
   * A collection of references to subnets.
   * @member {boolean}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.etag]
   * Gets a unique read-only string that changes whenever the resource is
   * updated.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpoints]
   * An array of service endpoints.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.interfaceEndpoints]
   * An array of references to interface endpoints
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.ipConfigurations]
   * Gets an array of references to the network interface IP configurations
   * using subnet.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.provisioningState]
   * The provisioning state of the resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.publicIPAddress]
   * The reference of the public IP resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.provisioningState]
   * Gets the provisioning state of the public IP resource. Possible values
   * are: 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings]
   * The FQDN of the DNS record associated with the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings.domainNameLabel]
   * Gets or sets the Domain name label.The concatenation of the domain name
   * label and the regionalized DNS zone make up the fully qualified domain
   * name associated with the public IP address. If a domain name label is
   * specified, an A DNS record is created for the public IP in the Microsoft
   * Azure DNS system.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings.fqdn]
   * Gets the FQDN, Fully qualified domain name of the A DNS record associated
   * with the public IP. This is the concatenation of the domainNameLabel and
   * the regionalized DNS zone.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings.reverseFqdn]
   * Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name
   * that resolves to this public IP address. If the reverseFqdn is specified,
   * then a PTR DNS record is created pointing from the IP address in the
   * in-addr.arpa domain to the reverse FQDN.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipTags]
   * The list of tags associated with the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipAddress]
   * The IP address associated with the public IP address resource.
   * @member {object}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPPrefix]
   * The Public IP Prefix this Public IP Address should be allocated from.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPPrefix.id]
   * Resource ID.
   * @member {number}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.idleTimeoutInMinutes]
   * The idle timeout of the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.resourceGuid]
   * The resource GUID property of the public IP resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.provisioningState]
   * The provisioning state of the PublicIP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.publicIPAddress.zones]
   * A list of availability zones denoting the IP allocated for the resource
   * needs to come from.
   * @member {array}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.applicationSecurityGroups]
   * Application security groups in which the IP configuration is included.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.provisioningState]
   * The provisioning state of the network interface IP configuration. Possible
   * values are: 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.name] The
   * name of the resource that is unique within a resource group. This name can
   * be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationNetworkInterfaceIPConfiguration.etag] A
   * unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration] The
   * reference to the private IP address on the internal Load Balancer that
   * will receive the tap
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.inboundNatRules]
   * Read only. Inbound rules URIs that use this frontend IP.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.inboundNatPools]
   * Read only. Inbound pools URIs that use this frontend IP.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.outboundRules]
   * Read only. Outbound rules URIs that use this frontend IP.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.loadBalancingRules]
   * Gets load balancing rules URIs that use this frontend IP.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.privateIPAddress]
   * The private IP address of the IP configuration.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.privateIPAllocationMethod]
   * The Private IP allocation method. Possible values are: 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet]
   * The reference of the subnet resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.addressPrefix]
   * The address prefix for the subnet.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.addressPrefixes]
   * List of  address prefixes for the subnet.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable]
   * The reference of the RouteTable resource.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.subnets]
   * A collection of references to subnets.
   * @member {boolean}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.etag]
   * Gets a unique read-only string that changes whenever the resource is
   * updated.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.serviceEndpoints]
   * An array of service endpoints.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.interfaceEndpoints]
   * An array of references to interface endpoints
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.ipConfigurations]
   * Gets an array of references to the network interface IP configurations
   * using subnet.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.provisioningState]
   * The provisioning state of the resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.subnet.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress]
   * The reference of the Public IP resource.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.sku]
   * The public IP address SKU.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.sku.name]
   * Name of a public IP address SKU. Possible values include: 'Basic',
   * 'Standard'
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPAllocationMethod]
   * The public IP allocation method. Possible values are: 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPAddressVersion]
   * The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
   * Possible values include: 'IPv4', 'IPv6'
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration]
   * The IP configuration associated with the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.privateIPAddress]
   * The private IP address of the IP configuration.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.privateIPAllocationMethod]
   * The private IP allocation method. Possible values are 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet]
   * The reference of the subnet resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefix]
   * The address prefix for the subnet.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefixes]
   * List of  address prefixes for the subnet.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable]
   * The reference of the RouteTable resource.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.subnets]
   * A collection of references to subnets.
   * @member {boolean}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.etag]
   * Gets a unique read-only string that changes whenever the resource is
   * updated.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpoints]
   * An array of service endpoints.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.interfaceEndpoints]
   * An array of references to interface endpoints
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.ipConfigurations]
   * Gets an array of references to the network interface IP configurations
   * using subnet.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.provisioningState]
   * The provisioning state of the resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.publicIPAddress]
   * The reference of the public IP resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.provisioningState]
   * Gets the provisioning state of the public IP resource. Possible values
   * are: 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings]
   * The FQDN of the DNS record associated with the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings.domainNameLabel]
   * Gets or sets the Domain name label.The concatenation of the domain name
   * label and the regionalized DNS zone make up the fully qualified domain
   * name associated with the public IP address. If a domain name label is
   * specified, an A DNS record is created for the public IP in the Microsoft
   * Azure DNS system.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings.fqdn]
   * Gets the FQDN, Fully qualified domain name of the A DNS record associated
   * with the public IP. This is the concatenation of the domainNameLabel and
   * the regionalized DNS zone.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings.reverseFqdn]
   * Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name
   * that resolves to this public IP address. If the reverseFqdn is specified,
   * then a PTR DNS record is created pointing from the IP address in the
   * in-addr.arpa domain to the reverse FQDN.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipTags]
   * The list of tags associated with the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipAddress]
   * The IP address associated with the public IP address resource.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPPrefix]
   * The Public IP Prefix this Public IP Address should be allocated from.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPPrefix.id]
   * Resource ID.
   * @member {number}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.idleTimeoutInMinutes]
   * The idle timeout of the public IP address.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.resourceGuid]
   * The resource GUID property of the public IP resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.provisioningState]
   * The provisioning state of the PublicIP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.zones]
   * A list of availability zones denoting the IP allocated for the resource
   * needs to come from.
   * @member {object}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPPrefix]
   * The reference of the Public IP Prefix resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.publicIPPrefix.id]
   * Resource ID.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.provisioningState]
   * Gets the provisioning state of the public IP resource. Possible values
   * are: 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.etag] A
   * unique read-only string that changes whenever the resource is updated.
   * @member {array}
   * [virtualNetworkTap.destinationLoadBalancerFrontEndIPConfiguration.zones] A
   * list of availability zones denoting the IP allocated for the resource
   * needs to come from.
   * @member {number} [virtualNetworkTap.destinationPort] The VXLAN destination
   * port that will receive the tapped traffic.
   * @member {string} [virtualNetworkTap.etag] Gets a unique read-only string
   * that changes whenever the resource is updated.
   * @member {string} [name] The name of the resource that is unique within a
   * resource group. This name can be used to access the resource.
   * @member {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   * @member {string} [type] Sub Resource type.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NetworkInterfaceTapConfiguration
   *
   * @returns {object} metadata of NetworkInterfaceTapConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkInterfaceTapConfiguration',
      type: {
        name: 'Composite',
        className: 'NetworkInterfaceTapConfiguration',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          virtualNetworkTap: {
            required: false,
            serializedName: 'properties.virtualNetworkTap',
            type: {
              name: 'Composite',
              className: 'VirtualNetworkTap'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkInterfaceTapConfiguration;