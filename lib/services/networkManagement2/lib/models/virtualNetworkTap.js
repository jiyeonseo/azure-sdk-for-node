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
 * Virtual Network Tap resource
 *
 * @extends models['Resource']
 */
class VirtualNetworkTap extends models['Resource'] {
  /**
   * Create a VirtualNetworkTap.
   * @member {array} [networkInterfaceTapConfigurations] Specifies the list of
   * resource IDs for the network interface IP configuration that needs to be
   * tapped.
   * @member {object} [destinationNetworkInterfaceIPConfiguration] The
   * reference to the private IP Address of the collector nic that will receive
   * the tap
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.virtualNetworkTaps] The
   * reference to Virtual Network Taps.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.applicationGatewayBackendAddressPools]
   * The reference of ApplicationGatewayBackendAddressPool resource.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.loadBalancerBackendAddressPools]
   * The reference of LoadBalancerBackendAddressPool resource.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.loadBalancerInboundNatRules] A
   * list of references of LoadBalancerInboundNatRules.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.privateIPAddress] Private IP
   * address of the IP configuration.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.privateIPAllocationMethod]
   * Defines how a private IP address is assigned. Possible values are:
   * 'Static' and 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.privateIPAddressVersion]
   * Available from Api-Version 2016-03-30 onwards, it represents whether the
   * specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
   * Possible values are: 'IPv4' and 'IPv6'. Possible values include: 'IPv4',
   * 'IPv6'
   * @member {object} [destinationNetworkInterfaceIPConfiguration.subnet]
   * Subnet bound to the IP configuration.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.subnet.addressPrefix] The
   * address prefix for the subnet.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.addressPrefixes] List
   * of  address prefixes for the subnet.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.subnet.routeTable] The
   * reference of the RouteTable resource.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.routeTable.subnets] A
   * collection of references to subnets.
   * @member {boolean}
   * [destinationNetworkInterfaceIPConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.subnet.routeTable.etag] Gets a
   * unique read-only string that changes whenever the resource is updated.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.serviceEndpoints] An
   * array of service endpoints.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.interfaceEndpoints] An
   * array of references to interface endpoints
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.ipConfigurations] Gets
   * an array of references to the network interface IP configurations using
   * subnet.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.subnet.provisioningState] The
   * provisioning state of the resource.
   * @member {string} [destinationNetworkInterfaceIPConfiguration.subnet.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string} [destinationNetworkInterfaceIPConfiguration.subnet.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {boolean} [destinationNetworkInterfaceIPConfiguration.primary]
   * Gets whether this is a primary customer address on the network interface.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress] Public IP
   * address bound to the IP configuration.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.sku] The
   * public IP address SKU.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.sku.name] Name
   * of a public IP address SKU. Possible values include: 'Basic', 'Standard'
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPAllocationMethod]
   * The public IP allocation method. Possible values are: 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPAddressVersion]
   * The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
   * Possible values include: 'IPv4', 'IPv6'
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration]
   * The IP configuration associated with the public IP address.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.privateIPAddress]
   * The private IP address of the IP configuration.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.privateIPAllocationMethod]
   * The private IP allocation method. Possible values are 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet]
   * The reference of the subnet resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefix]
   * The address prefix for the subnet.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefixes]
   * List of  address prefixes for the subnet.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable]
   * The reference of the RouteTable resource.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.subnets]
   * A collection of references to subnets.
   * @member {boolean}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.etag]
   * Gets a unique read-only string that changes whenever the resource is
   * updated.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpoints]
   * An array of service endpoints.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.interfaceEndpoints]
   * An array of references to interface endpoints
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.ipConfigurations]
   * Gets an array of references to the network interface IP configurations
   * using subnet.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.provisioningState]
   * The provisioning state of the resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.subnet.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.publicIPAddress]
   * The reference of the public IP resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.provisioningState]
   * Gets the provisioning state of the public IP resource. Possible values
   * are: 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipConfiguration.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings]
   * The FQDN of the DNS record associated with the public IP address.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings.domainNameLabel]
   * Gets or sets the Domain name label.The concatenation of the domain name
   * label and the regionalized DNS zone make up the fully qualified domain
   * name associated with the public IP address. If a domain name label is
   * specified, an A DNS record is created for the public IP in the Microsoft
   * Azure DNS system.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings.fqdn]
   * Gets the FQDN, Fully qualified domain name of the A DNS record associated
   * with the public IP. This is the concatenation of the domainNameLabel and
   * the regionalized DNS zone.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.dnsSettings.reverseFqdn]
   * Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name
   * that resolves to this public IP address. If the reverseFqdn is specified,
   * then a PTR DNS record is created pointing from the IP address in the
   * in-addr.arpa domain to the reverse FQDN.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipTags] The
   * list of tags associated with the public IP address.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.ipAddress] The
   * IP address associated with the public IP address resource.
   * @member {object}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPPrefix]
   * The Public IP Prefix this Public IP Address should be allocated from.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.publicIPPrefix.id]
   * Resource ID.
   * @member {number}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.idleTimeoutInMinutes]
   * The idle timeout of the public IP address.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.resourceGuid]
   * The resource GUID property of the public IP resource.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.provisioningState]
   * The provisioning state of the PublicIP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.etag] A unique
   * read-only string that changes whenever the resource is updated.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.publicIPAddress.zones] A list
   * of availability zones denoting the IP allocated for the resource needs to
   * come from.
   * @member {array}
   * [destinationNetworkInterfaceIPConfiguration.applicationSecurityGroups]
   * Application security groups in which the IP configuration is included.
   * @member {string}
   * [destinationNetworkInterfaceIPConfiguration.provisioningState] The
   * provisioning state of the network interface IP configuration. Possible
   * values are: 'Updating', 'Deleting', and 'Failed'.
   * @member {string} [destinationNetworkInterfaceIPConfiguration.name] The
   * name of the resource that is unique within a resource group. This name can
   * be used to access the resource.
   * @member {string} [destinationNetworkInterfaceIPConfiguration.etag] A
   * unique read-only string that changes whenever the resource is updated.
   * @member {object} [destinationLoadBalancerFrontEndIPConfiguration] The
   * reference to the private IP address on the internal Load Balancer that
   * will receive the tap
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.inboundNatRules] Read
   * only. Inbound rules URIs that use this frontend IP.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.inboundNatPools] Read
   * only. Inbound pools URIs that use this frontend IP.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.outboundRules] Read only.
   * Outbound rules URIs that use this frontend IP.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.loadBalancingRules] Gets
   * load balancing rules URIs that use this frontend IP.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.privateIPAddress] The
   * private IP address of the IP configuration.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.privateIPAllocationMethod]
   * The Private IP allocation method. Possible values are: 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {object} [destinationLoadBalancerFrontEndIPConfiguration.subnet]
   * The reference of the subnet resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.addressPrefix] The
   * address prefix for the subnet.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.addressPrefixes]
   * List of  address prefixes for the subnet.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable] The
   * reference of the RouteTable resource.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.subnets]
   * A collection of references to subnets.
   * @member {boolean}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.routeTable.etag]
   * Gets a unique read-only string that changes whenever the resource is
   * updated.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.serviceEndpoints]
   * An array of service endpoints.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.interfaceEndpoints]
   * An array of references to interface endpoints
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.ipConfigurations]
   * Gets an array of references to the network interface IP configurations
   * using subnet.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.provisioningState]
   * The provisioning state of the resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.name] The name of
   * the resource that is unique within a resource group. This name can be used
   * to access the resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.subnet.etag] A unique
   * read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress] The
   * reference of the Public IP resource.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.sku] The
   * public IP address SKU.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.sku.name]
   * Name of a public IP address SKU. Possible values include: 'Basic',
   * 'Standard'
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPAllocationMethod]
   * The public IP allocation method. Possible values are: 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPAddressVersion]
   * The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
   * Possible values include: 'IPv4', 'IPv6'
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration]
   * The IP configuration associated with the public IP address.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.privateIPAddress]
   * The private IP address of the IP configuration.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.privateIPAllocationMethod]
   * The private IP allocation method. Possible values are 'Static' and
   * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet]
   * The reference of the subnet resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefix]
   * The address prefix for the subnet.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.addressPrefixes]
   * List of  address prefixes for the subnet.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup]
   * The reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.securityRules]
   * A collection of security rules of the network security group.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.defaultSecurityRules]
   * The default security rules of network security group.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.networkInterfaces]
   * A collection of references to network interfaces.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.subnets]
   * A collection of references to subnets.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.resourceGuid]
   * The resource GUID property of the network security group resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.provisioningState]
   * The provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.networkSecurityGroup.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable]
   * The reference of the RouteTable resource.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.routes]
   * Collection of routes contained within a route table.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.subnets]
   * A collection of references to subnets.
   * @member {boolean}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.disableBgpRoutePropagation]
   * Gets or sets whether to disable the routes learned by BGP on that route
   * table. True means disable.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.provisioningState]
   * The provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.routeTable.etag]
   * Gets a unique read-only string that changes whenever the resource is
   * updated.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpoints]
   * An array of service endpoints.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.serviceEndpointPolicies]
   * An array of service endpoint policies.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.interfaceEndpoints]
   * An array of references to interface endpoints
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.ipConfigurations]
   * Gets an array of references to the network interface IP configurations
   * using subnet.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.resourceNavigationLinks]
   * Gets an array of references to the external resources using subnet.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.provisioningState]
   * The provisioning state of the resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.subnet.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.publicIPAddress]
   * The reference of the public IP resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.provisioningState]
   * Gets the provisioning state of the public IP resource. Possible values
   * are: 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.name]
   * The name of the resource that is unique within a resource group. This name
   * can be used to access the resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipConfiguration.etag]
   * A unique read-only string that changes whenever the resource is updated.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings]
   * The FQDN of the DNS record associated with the public IP address.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings.domainNameLabel]
   * Gets or sets the Domain name label.The concatenation of the domain name
   * label and the regionalized DNS zone make up the fully qualified domain
   * name associated with the public IP address. If a domain name label is
   * specified, an A DNS record is created for the public IP in the Microsoft
   * Azure DNS system.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings.fqdn]
   * Gets the FQDN, Fully qualified domain name of the A DNS record associated
   * with the public IP. This is the concatenation of the domainNameLabel and
   * the regionalized DNS zone.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.dnsSettings.reverseFqdn]
   * Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name
   * that resolves to this public IP address. If the reverseFqdn is specified,
   * then a PTR DNS record is created pointing from the IP address in the
   * in-addr.arpa domain to the reverse FQDN.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipTags]
   * The list of tags associated with the public IP address.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.ipAddress]
   * The IP address associated with the public IP address resource.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPPrefix]
   * The Public IP Prefix this Public IP Address should be allocated from.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.publicIPPrefix.id]
   * Resource ID.
   * @member {number}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.idleTimeoutInMinutes]
   * The idle timeout of the public IP address.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.resourceGuid]
   * The resource GUID property of the public IP resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.provisioningState]
   * The provisioning state of the PublicIP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.etag] A
   * unique read-only string that changes whenever the resource is updated.
   * @member {array}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPAddress.zones] A
   * list of availability zones denoting the IP allocated for the resource
   * needs to come from.
   * @member {object}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPPrefix] The
   * reference of the Public IP Prefix resource.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.publicIPPrefix.id]
   * Resource ID.
   * @member {string}
   * [destinationLoadBalancerFrontEndIPConfiguration.provisioningState] Gets
   * the provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string} [destinationLoadBalancerFrontEndIPConfiguration.name] The
   * name of the resource that is unique within a resource group. This name can
   * be used to access the resource.
   * @member {string} [destinationLoadBalancerFrontEndIPConfiguration.etag] A
   * unique read-only string that changes whenever the resource is updated.
   * @member {array} [destinationLoadBalancerFrontEndIPConfiguration.zones] A
   * list of availability zones denoting the IP allocated for the resource
   * needs to come from.
   * @member {number} [destinationPort] The VXLAN destination port that will
   * receive the tapped traffic.
   * @member {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualNetworkTap
   *
   * @returns {object} metadata of VirtualNetworkTap
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualNetworkTap',
      type: {
        name: 'Composite',
        className: 'VirtualNetworkTap',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
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
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          networkInterfaceTapConfigurations: {
            required: false,
            serializedName: 'properties.networkInterfaceTapConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NetworkInterfaceTapConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'NetworkInterfaceTapConfiguration'
                  }
              }
            }
          },
          destinationNetworkInterfaceIPConfiguration: {
            required: false,
            serializedName: 'properties.destinationNetworkInterfaceIPConfiguration',
            type: {
              name: 'Composite',
              className: 'NetworkInterfaceIPConfiguration'
            }
          },
          destinationLoadBalancerFrontEndIPConfiguration: {
            required: false,
            serializedName: 'properties.destinationLoadBalancerFrontEndIPConfiguration',
            type: {
              name: 'Composite',
              className: 'FrontendIPConfiguration'
            }
          },
          destinationPort: {
            required: false,
            serializedName: 'properties.destinationPort',
            type: {
              name: 'Number'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualNetworkTap;